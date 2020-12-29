let blocks = document.querySelectorAll('.block');
let text = document.querySelector('h3');
let error = document.querySelector('p');
let reset = document.querySelector('button');
let player = 'X';

text.textContent = `${player} 's turn !`
blocks.forEach(block =>{
    block.addEventListener('click',()=> {
        if(block.textContent !=''){
            error.textContent=`This block isn't empty`;
            setTimeout( ()=>{
                error.textContent=``;
            },2000)
        }else{
            block.textContent = player;
            if(player === 'X'){
                block.style.color='#85C1E9'
            }else{
                block.style.color='#ff005b'
            }
            turnPlayer(); 
        } ;
        tie();
        winner();
    });
});

function turnPlayer(){
    if(player === 'X'){
            player = 'O';
            text.textContent = `${player} 's turn !`
        }else{
            player = 'X';
            text.textContent = `${player} 's turn !`
        }
};

function winner(){
    let row1 = blocks[0].textContent == blocks[1].textContent && blocks[0].textContent == blocks[2].textContent && blocks[0].textContent != '';
    let row2 = blocks[3].textContent == blocks[4].textContent && blocks[3].textContent == blocks[5].textContent && blocks[3].textContent != '';
    let row3 = blocks[6].textContent == blocks[7].textContent && blocks[6].textContent == blocks[8].textContent && blocks[6].textContent != '';
    let col1 = blocks[0].textContent == blocks[3].textContent && blocks[0].textContent == blocks[6].textContent && blocks[0].textContent != '';
    let col2 = blocks[1].textContent == blocks[4].textContent && blocks[1].textContent == blocks[7].textContent && blocks[1].textContent != '';
    let col3 = blocks[2].textContent == blocks[5].textContent && blocks[2].textContent == blocks[8].textContent && blocks[2].textContent != '';
    let diag1 = blocks[0].textContent == blocks[4].textContent && blocks[0].textContent == blocks[8].textContent && blocks[0].textContent != '';
    let diag2 = blocks[2].textContent == blocks[4].textContent && blocks[2].textContent == blocks[6].textContent && blocks[2].textContent != '';


    if(row1 || row2 || row3 ||col1 || col2 || col3 || diag1 || diag2){
  
        if(row1){
            text.textContent = `Game over. ${blocks[0].textContent} won !`
        }else if(row2){
            text.textContent = `Game over. ${blocks[3].textContent} won !`
        }else if(row3){
            text.textContent = `Game over. ${blocks[6].textContent} won !`
        }else if(col1){
            text.textContent = `Game over. ${blocks[0].textContent} won !`
        }else if(col2){
            text.textContent = `Game over. ${blocks[1].textContent} won !`
        }else if(col3){
            text.textContent = `Game over. ${blocks[2].textContent} won !`
        }else if(diag1){
            text.textContent = `Game over. ${blocks[0].textContent} won !`
        }else if(diag2){
            text.textContent = `Game over. ${blocks[2].textContent} won !`
        };
        
        blocks.forEach( block =>{
            block.style.pointerEvents='none';
        });
    text.classList.add('winner');
    };
};

function tie(){
    let value=[];
    blocks.forEach(block =>{
        value.push(block.textContent);
    });
    if(!value.includes("")){
        text.textContent = 'Tie !';
    };
};

reset.addEventListener('click', function(){
    location.reload()
});
