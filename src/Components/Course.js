export default function Course({item}) {
    return <>
    <h4>{Object.keys(item)}</h4>
    <ul>
        {Object.values(item).map(d => <li>{d}</li>)}
    </ul>
    </>
}