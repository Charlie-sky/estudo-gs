const Desconto = (preço, percentual) => {
    return preço - (preço * percentual/100) };

    console.log(Desconto(100, 20))
