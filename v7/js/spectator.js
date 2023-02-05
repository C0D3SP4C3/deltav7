const arctida_spectator = {
    spectator: null,
    canvas_container: document.getElementsByClassName("canvas-container")[0],
    spectator_isAlive: false,
    reconnect: null,

    init(){
        
        this.canvas_container.innerHTML += `<div class="spectator-hud" id="spectator-container"></div>`;
        this.spectator_container = document.getElementById("spectator-container");
        this.spectator_container.innerHTML = `<button id="addSpect" onclick="arctida_spectator.addSpectator();">Add spectator!</button>`;
    },
    addSpectator() {

        if(this.spectator === null) {
            this.spectator = app.initClient(3);
            this.spectator.connect(app.server.ws);
            console.log(`[SPECTATOR] Connecting to: ${app.server.ws}`);
            this.spectator_container.innerHTML = `<span> [Spectator: <span style="color: orange">Connecting..</span>] </span> <button id="removeSpect" onclick="arctida_spectator.removeSpectator();">Close spectator!</button>`;
        } else {
            this.removeSpectator();
            this.addSpectator();
        }
        this.spectator.on('estabilished', () => {
            console.log(`[SPECTATOR] Estabilished!`);
            this.spectator.sendSpectate();
            this.spectator_isAlive = true;
            this.spectator_container.innerHTML = `<span> [Spectator: <span style="color: green">Connected!</span>] </span> <button id="removeSpect" onclick="arctida_spectator.removeSpectator();">Close spectator!</button>`;
        });

        this.spectator.on('close', () => {
            console.log(`[SPECTATOR] Failed to connect! Reconnecting to ${app.server.ws}`);
            this.spectator_isAlive = false;
            this.reconnect = setTimeout(() => this.spectator.connect(app.server.ws), 1500);
        });

    },
    removeSpectator(){
        if(this.spectator && this.spectator_isAlive) {
            app.destroyClient(this.spectator);
            this.spectator = null;
            this.spectator_container.innerHTML = `<button id="addSpect" onclick="arctida_spectator.addSpectator();">Add spectator!</button>`;
            clearTimeout(this.reconnect);
        } else {
            this.spectator = null;
            clearTimeout(this.reconnect);
            this.spectator_container.innerHTML = `<button id="addSpect" onclick="arctida_spectator.addSpectator();">Add spectator!</button>`;
        }
    },

};

arctida_spectator.init();
