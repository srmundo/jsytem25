export class SimulatedMemory{
    constructor(){
        this.memory = new Uint8Array(size);
    }
    read(address){
        return this.memory[address];
    }
    write(address, value){
        this.memory[address] = value;
    }
}