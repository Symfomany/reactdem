import Text from './Text'

const Liste = ( { prenoms } ) =>
{
    return (
        <ul>
            {prenoms.map((val) => <Text content={val}></Text>)}
        </ul>
    )  
}

export default Liste