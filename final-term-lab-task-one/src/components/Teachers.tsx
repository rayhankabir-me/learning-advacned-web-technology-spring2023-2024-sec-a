import { teachers } from '../data.js';


export default function Teachers(){
    const listItems = teachers.map(teacher =>
        <li key={teacher.id}>{teacher.name}</li>
      );
      return <ul>{listItems}</ul>;
}