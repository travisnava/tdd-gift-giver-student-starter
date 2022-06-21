
const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]


class GiftExchange {
    static pairs(names) {
        if (names.length % 2 == 0) {
            let pairs = []
            let numOfPairs = names.length / 2
            let usedNames = []
            let name1 = names[Math.floor(Math.random() * (names.length -1))]
            let name2 = names[Math.floor(Math.random() * (names.length -1))]

            for (let i=0; i< numOfPairs; i++) {
                if (usedNames.includes(name1)) {
                    name1 = names[Math.floor(Math.random() * (names.length -1))]
                    i = i-1
                }
                else if (usedNames.includes(name2)) {
                    name2 = names[Math.floor(Math.random() * (names.length -1))]
                    i = i -1
                }
                else if (name1 === name2) {
                    name1 = names[Math.floor(Math.random() * (names.length -1)) +1]
                    i = i-1
                }
                else {
                    usedNames.push(name1)
                    usedNames.push(name2)
                    pairs.push([name1, name2])
                }
            }   
            return pairs
        }
        else {
            throw new Error("test")
        }

        
    }

    

}







module.exports = GiftExchange