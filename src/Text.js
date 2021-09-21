const Text = ( { color = 'pink', content = "",
    otherStyle = {
        size: 19,
        fontWeight: 'normal'
    } } ) =>
{
    return (
        <p style={{ color: color, 
            fontSize: otherStyle.size,
            fontWeight: otherStyle.fontWeight
        }}>
            {content}
        </p>
    )
}

export default Text