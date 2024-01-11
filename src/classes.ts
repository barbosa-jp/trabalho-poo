interface IPessoa{
    submeterTarefa(tarefa: Tarefa, curso: Curso): void;
}

abstract class Pessoa{
    private nome: string;
    private senha: string;
    protected matricula: string;

    constructor(nome: string, senha: string, matricula: string){
        this.nome = nome;
        this.senha = senha;
        this.matricula = matricula;
    }

    public setSenha(senha: string){
        this.senha = senha;
    }

    public getSenha(): string{
        return this.senha;
    }
    
    public setNome(nome: string){
        this.nome = nome;
    }

    public getNome(): string{
        return this.nome;
    }

    public setMatricula(matricula: string){
        this.matricula = matricula;
    }

    public getMatricula(): string{
        return this.matricula;
    }
}
class Aluno extends Pessoa implements IPessoa{

    constructor(nome: string, senha: string, matricula: string){
        super(nome,senha,matricula)
    }

    submeterTarefa(tarefa: Tarefa, curso: Curso) {
        let encontrado = false;
        let contador = 0;
        while(encontrado ===false){
            if (curso.tarefas[contador].nome === tarefa.nome){
                encontrado = true;
                console.log(tarefa)
                console.log("oi")
                for(let i = 0; i < tarefa.alunosPendentes.length; i++){
                    if (tarefa.alunosPendentes[i].matricula === this.matricula){
                        tarefa.alunosPendentes.splice(i, 1);
                        console.log(tarefa.alunosPendentes);
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

    constructor(nome: string, senha: string, matricula: string){
        super(nome,senha,matricula)
    }
    submeterTarefa(tarefa: Tarefa, curso: Curso) {
        curso.tarefas.push(tarefa);
    }    
}

class Curso{
    public nome: string;
    public alunos: Aluno[];
    public tarefas: Tarefa[];

    constructor(nome: string, alunos: Aluno[], tarefas: Tarefa[]){
        this.nome = nome;
        this.alunos = alunos;
        this.tarefas = tarefas;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getNome(): string{
        return this.nome;
    }

    public setAlunos(alunos: Aluno[]){
        this.alunos = alunos;
    }

    public getAlunos(): Aluno[]{
        return this.alunos;
    }

    public setTarefas(tarefas: Tarefa[]){
        this.tarefas = tarefas;
    }

    public getTarefas(): Tarefa[]{
        return this.tarefas;
    }

    inserirAluno(aluno: Aluno){
        this.alunos.push(aluno)
    }
}

class Tarefa{
    private nome: string;
    private alunosPendentes: Aluno[]; 

    constructor(nome:string, alunosPendentes: Aluno[]){
        this.nome = nome;
        this.alunosPendentes = alunosPendentes;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getNome(): string{
        return this.nome;
    }

    public setAlunosPendentes(alunosPendentes: Aluno[]){
        this.alunosPendentes = alunosPendentes;
    }

    public getAlunosPendentes(): Aluno[]{
        return this.alunosPendentes;
    }
}