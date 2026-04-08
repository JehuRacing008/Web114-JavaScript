// Noah Monnington
// 4/8/26
"use strict"
let totalCrates = 20;

for (let crate = 1; crate <= totalCrates; crate++)
    {
        if (crate % 5 == 0)
        {
            console.log(`Crate ${crate}: Handle with care ${crate}`);
        }
        else
        {
            if (crate % 2 == 0){
                console.log(`Crate ${crate}: Load crate ${crate}`);
            }
            else
            {
                console.log(`Crate ${crate}: Inspect crate ${crate}`);
            }
        }
    }
    console.log(`\nTotal crates scanned: ${totalCrates}`);