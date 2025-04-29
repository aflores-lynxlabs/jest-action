export function titleCase(text: string) {
    if(text === '') return '';
    const arr = text.split(' ');
    const result = arr.map(elem => {
        return elem[0].toUpperCase() + elem.substring(1).toLowerCase();
    })
    return result.join(' ');
}
 export function mayorDeEdad(age: number) {
    if(age < 0) return null;
    return age >= 18 ? true : false;
 }

const ProfileCard = () => {
    return <div></div>
}

export default ProfileCard;