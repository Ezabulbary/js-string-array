const products = [
    'Dell insparon 15 3000',
    'hp Model 4x59 silver color',
    'modulas to thin Laptop',
    'htc lower price Phone',
    'Dell new model',
    'Sony TV old model',
    'LG butterfly',
    'Dell new leptop',
];

const searching = 'Dell';

// indexOf

const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}

console.log(output);