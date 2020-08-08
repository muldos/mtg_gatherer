const compose = (...fns) =>
 (arg) =>
    fns.reduce(
        (composed, f) => f(composed),
        arg
    ) 


arr.reduce(callback)
arr.reduce(callback, valeurInitiale)

callback takes as input accumulator, and currentvalue 

fns = [g,f]
compose(fns)(x) == f(g(x))
