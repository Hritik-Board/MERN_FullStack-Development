//simulate a delay

async function waitAndRun(value) {
  //create a promse making API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });
}

// const waitAndRun = async ()=> {

// }

//usage

// await waitAndRun(2);

const getProcessedvalue = async () => {
  const result = await waitAndRun("This is my promise");
  console.log(result);
};

getProcessedvalue();
