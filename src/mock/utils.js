const resMessage = {
    isMock: true,
    data: null,
    stage: 200,
    message: ''
}
const builder = (data = {}, message = '', stage = 0) => {
    resMessage.data = data
    resMessage.message = message
    resMessage.stage = stage
    return resMessage
}
export {
    builder
}
