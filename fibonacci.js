const array = process.argv;

//iterative function:

console.log('Iterative:');

function fibs(number) {
  let fibSeq = [0, 1];

  for (let i = 2; i < number; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  console.log(fibSeq);
}
fibs(array[2]);

//recursive function:

console.log('Recursive:');

let fibSeqRec = [0, 1];

function fibsRec(number) {
  if (fibSeqRec.length === Number(number)) {
    console.log(fibSeqRec);
    return;
  } else if (fibSeqRec.length !== Number(number)) {
    fibSeqRec.push(
      fibSeqRec[fibSeqRec.length - 2] + fibSeqRec[fibSeqRec.length - 1]
    );
    fibsRec(number);
  }
}
fibsRec(array[2]);
