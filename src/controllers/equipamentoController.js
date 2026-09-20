
const pool = require('../config/database');



//------------------------------FUNÇÃO DE LISTAR ITENS--------------------------------------------


async function listar(req, res) {

    try{
        const {status, categoria} = req.query;
        let sql = 'SELECT * FROM  equipamentos WHERE 1 = 1';

        const params = [];

        if (status){
            sql += ' AND status = ?';
            params.push(status);
        }

        if (categoria){
            sql += ' AND categoria = ?';
            params.push(categoria);
        }
        
        sql += ' ORDER BY criado_em DESC';   // ordena para mostrar do mais recente para o mais antigo

        const [linhas] = await pool.query(sql, params);

        res.json(linhas);


    }catch(erro){
        console.error(erro);
        res.status(500).json({erro: "ERRO: não foi possível listar os equipamentos"});
    }
    
}


//----------------------------------FUNÇÃO DE CRIAR ITEM------------------------------------------------


async function criar(req, res) {
    try{
        const { quantidade, nome, categoria, status} = req.body;


        
        if(!quantidade || !nome || !categoria || !status){
            return res.status(400).json({erro: 'Preencha todos os campos obrigatórios'});
        }

        const [resultado] = await pool.query(
            'INSERT INTO equipamentos (quantidade, nome, categoria, status) VALUES (?,?,?,?)',
            [quantidade, nome, categoria, status]
        );

        // resultado.insertId é o ID que o MySQL gerou automaticamente por ser do tipo AUTO_INCREMENT
        res.status(201).json({id: resultado.insertId, quantidade, nome, categoria, status});

    }catch(erro){
        console.error(erro);
        res.status(500).json({erro: "ERRO: não foi possível criar o equipamento"});
    }
    
}


//---------------------------FUNÇÃO DE ATUALIZAR ITEM---------------------------------------------

async function atualizar(req, res) {

    try{

        const{id} = req.params; //pega o id que veio da url

        const {quantidade, nome, categoria, status} = req.body;
        if(!quantidade || !nome || !categoria || !status){
            return res.status(400).json({erro: 'Preencha todos os campos obrigatórios.'});
        }

         const [resultado] = await pool.query(
            'UPDATE equipamentos SET quantidade = ?, nome = ?, categoria = ?, status = ? WHERE id = ?',
            [quantidade, nome, categoria, status, id]
         );


         if(resultado.affectedRows === 0){
            return res.status(404).json({erro: 'Equipamento não encontrado'});
         }

         res.json({id, quantidade, nome, categoria, status});


    }catch(erro){
        console.error(erro);
        res.status(500).json({erro: "ERRO: não foi possível atualizar o equipamento"});
    }
}



//------------------------------------FUNÇÃO DE APAGAR ITEM-----------------------------------------------

async function deletar(req, res) {
    try{
        const{id} = req.params;
        const [resultado] = await pool.query(' DELETE FROM equipamentos WHERE id = ?',[id]);

        if(resultado.affectedRows === 0){
            return res.status(404).json({erro:'ERRO: Equipamento não foi encontrado'});
        }

        res.json({mensagem: 'Equipamento foi excluido com sucesso.'});

    }catch(erro){
        console.error(erro);
        res.status(500).json({erro: 'ERRO: não foi possível excluiir o equipamento'});
    }
    
}


module.exports = {listar, criar, atualizar, deletar}; //exporta as 4 funções juntas