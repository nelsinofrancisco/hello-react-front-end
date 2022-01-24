import { useSelector } from 'react-redux';
import store from '../redux/configureStore';
import { getGreetings } from '../redux/greetings/greetings';

const HelloWorld = () => {
  const { greeting } = useSelector((state) => state.greetings);

  return (
    <>
      Random Greeting:
      <button type="button" className="getThingsBtn" onClick={() => store.dispatch(getGreetings())}>
        getRandomGreeting
      </button>
      <br />
      <ul>
        <li>
          Id:
          {' '}
          { greeting.id }
        </li>
        <li>
          Message:
          {' '}
          { greeting.message }
        </li>
      </ul>
    </>
  );
};

export default HelloWorld;
