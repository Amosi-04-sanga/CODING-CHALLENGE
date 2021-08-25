// QN.
/* ____________
    Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
    If you want to know more: http://en.wikipedia.org/wiki/DNA
    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
    More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
    
    EXAMPLE: DNAStrand ("ATTGC") // return "TAACG"
             DNAStrand ("GTAT") // return "CATA"
    _____________ */

// DNAStrand function.
function DNAStrand(dna) {

    // capitalize a dna string.
    dna = dna.toUpperCase()
    // an array of genes.
    dna = dna.split('')

    let complements = []

    // iterate over an array, get other complementary side.
    dna.forEach( gene => {

        switch( gene ) {

            case "T":
                gene = "A"
                complements.push(gene)
                break

            case "A":
                gene = "T"
                complements.push(gene)
                break

            case "C":
                gene = "G"
                complements.push(gene)
                break

            case "G":
                gene = "C"
                complements.push(gene)
                break

            default: 
                return

        }
        
    } )

    complements = complements.join('')

    // return other complementart side.
    return complements
    
}

// retrive DNAStrand function.
DNAStrand("ATTGC")

