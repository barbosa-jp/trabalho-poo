"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = exports.Curso = exports.Professor = exports.Aluno = void 0;
class Pessoa {
    constructor(nome, senha, matricula) {
        this.nome = nome;
        this.senha = senha;
        this.matricula = matricula;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    getSenha() {
        return this.senha;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getMatricula() {
        return this.matricula;
    }
}
class Aluno extends Pessoa {
    constructor(nome, senha, matricula) {
        super(nome, senha, matricula);
    }
    submeterTarefa(tarefa, curso) {
        let encontrado = false;
        let contador = 0;
        while (encontrado === false) {
            if (curso.tarefas[contador].nome === tarefa.nome) {
                encontrado = true;
                console.log(tarefa);
                console.log("oi");
                for (let i = 0; i < tarefa.alunosPendentes.length; i++) {
                    if (tarefa.alunosPendentes[i].matricula === this.matricula) {
                        tarefa.alunosPendentes.splice(i, 1);
                        console.log(tarefa.alunosPendentes);
                    }
                }
            }
            contador++;
        }
    }
}
exports.Aluno = Aluno;
class Professor extends Pessoa {
    constructor(nome, senha, matricula) {
        super(nome, senha, matricula);
    }
    submeterTarefa(tarefa, curso) {
        curso.tarefas.push(tarefa);
    }
}
exports.Professor = Professor;
class Curso {
    constructor(nome, alunos, tarefas) {
        this.nome = nome;
        this.alunos = alunos;
        this.tarefas = tarefas;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setAlunos(alunos) {
        this.alunos = alunos;
    }
    getAlunos() {
        return this.alunos;
    }
    setTarefas(tarefas) {
        this.tarefas = tarefas;
    }
    getTarefas() {
        return this.tarefas;
    }
    inserirAluno(aluno) {
        this.alunos.push(aluno);
    }
}
exports.Curso = Curso;
class Tarefa {
    constructor(nome, alunosPendentes) {
        this.nome = nome;
        this.alunosPendentes = alunosPendentes;
    }
}
exports.Tarefa = Tarefa;
