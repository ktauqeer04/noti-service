const { RabbitMQClient } = require("./receiver-init");

// const connectQueue = async () => {

//   // let receivedMessage = [];

//   try {
//     const Queue = new RabbitMQClient("myExchangeName", "myBindingKey", "myQueue");
//     await Queue.initialize();
//     await Queue.subscribe();

//   } catch (error) {
//     console.log("error is ", error);
//     throw error;
//   }

// };

const receiveEmail = async () => {

  try {
    
    const Queue = new RabbitMQClient("myExchangeName1", "myBindingKey1", "myQueue");
    await Queue.initialize();
    await Queue.subscribe();

  } catch (error) {
    console.log(error);
    throw error;
  }

}

module.exports = {
  receiveEmail
}