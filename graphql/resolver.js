const dh = {
    nick:"webcogy",
    age:33,
    gender:"male"
}


const resolvers = {
    Query: {
        name:() => 'daehyun',
        person:() => dh
    },
}



export default resolvers;