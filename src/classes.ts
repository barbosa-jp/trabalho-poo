interface IPessoa{
    submeterTarefa(tarefa: Tarefa, curso: Curso): void;
}

abstract class Pessoa{
    protected _nome: string;
    protected _cpf: number;
    protected _senha: string;
    protected _matricula: string;

    constructor(){
        this._nome = this.nome;
        this._senha = this.senha;
        this._matricula = this.matricula;
        this._cpf = this.cpf;
    }

    public set senha(novaSenha: string){
        this._senha = novaSenha;
    }

    public get senha(): string{
        return this._senha;
    }
    
    public set nome(nome: string){
        this._nome = nome;
    }

    public get nome(): string{
        return this._nome;
    }

    public set cpf(novoCPF: number){
        this._cpf = novoCPF;
    }

    public get cpf(): number{
        return this._cpf;
    }

    public set matricula(matricula: string){
        this._matricula = matricula;
    }

    public get matricula(): string{
        return this.matricula;
    }
}
class Aluno extends Pessoa implements IPessoa{
    constructor(){
        super();
    }

    submeterTarefa(tarefa: Tarefa, curso: Curso) {
        let encontrado = false;
        let contador = 0;
        while(encontrado ===false){
            if (curso.tarefas[contador].nome === tarefa.nome){
                encontrado = true;
                for(let i = 0; i < tarefa.alunosPendentes.length; i++){
                    if (tarefa.alunosPendentes[i].matricula === this.matricula){
                        tarefa.alunosPendentes.splice(i, 1);
                    }
                }
            }
            if(encontrado === false){
                throw new Error("Tarefa não encontrada.");
            }
            contador++;
        }
    }
}

class Professor extends Pessoa implements IPessoa{
    constructor(){
        super()
    }
    submeterTarefa(tarefa: Tarefa, curso: Curso) {
        curso.tarefas.push(tarefa);
    }    
}

class Curso{
    private _nome: string;
    private _alunos: Aluno[];
    private _tarefas: Tarefa[];

    constructor(){
        this._nome = this.nome;
        this._alunos = this.alunos;
        this._tarefas = this.tarefas;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get nome(): string{
        return this._nome;
    }

    public set alunos(alunos: Aluno[]){
        this._alunos = alunos;
    }

    public get alunos(): Aluno[]{
        return this._alunos;
    }

    public set tarefas(tarefas: Tarefa[]){
        this._tarefas = tarefas;
    }

    public get tarefas(): Tarefa[]{
        return this._tarefas;
    }

    inserirAluno(aluno: Aluno){
        this.alunos.push(aluno)
    }
}

class Tarefa{
    private _nome: string;
    private _alunosPendentes: Aluno[]; 

    constructor(){
        this._nome = this.nome;
        this._alunosPendentes = this.alunosPendentes;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get nome(): string{
        return this._nome;
    }

    public set alunosPendentes(alunosPendentes: Aluno[]){
        this._alunosPendentes = alunosPendentes;
    }

    public get alunosPendentes(): Aluno[]{
        return this._alunosPendentes;
    }
}