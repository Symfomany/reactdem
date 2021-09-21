import Myvideo from './video.mp4'

const Presentation = () =>
{
    return (
        <video width="640" height="360" autoPlay>
            <source src={Myvideo} type="video/mp4" />
            <source src={Myvideo} type="video/webm" />
            <source src={Myvideo} type="video/ogg" />
        </video>
    )
}

export default Presentation