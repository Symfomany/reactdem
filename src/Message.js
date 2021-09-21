import Text from './Text'

const Message = () =>
{
    const myStyle = {size: 29, fontWeight: "bold"}
    const myAnotherStyle = {size: 18, fontWeight: "normal"}

    return (
        <div>
            <Text otherStyle={myStyle} color="red" content="le premier contenu :)" />
        <Text  otherStyle={myAnotherStyle} color="blue" content="Je suis le nouveau contenu" />
        </div>
    )
}

export default Message