export class SimulatedCPU{
    constructor(memory){
        this.memory = memory;
        this.registers = {PC: 0, ACC: 0};
        
    }
}