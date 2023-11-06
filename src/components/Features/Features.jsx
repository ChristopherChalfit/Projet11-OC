import './Features.sass'
export default function Features({img,alt, title, content}){
    return(<div className='feature-item'>
    <img src={img} alt={alt}key={title} className='feature-icon'/>
    <h3 className='feature-item-title'>{title}</h3>
    <p>{content}</p>
    </div>)
}