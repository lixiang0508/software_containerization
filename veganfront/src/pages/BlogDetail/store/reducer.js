import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultState = fromJS({
    title: 'This is my own story ',
    content: ' <p>Let\'s go Vegan!I am Lixiang Zhang and I have been a vegetarian since I was 12——even\n' +
        '                    before junior school age. I can still remember the words that day which shocked mr and influenced me\n' +
        '                    lifelong:When you stare at the innocent eyes of a small sheep while eating her mom\'s corpse, is their any difference between\n' +
        '                    you and devil？\n' +
        '\n' +
        '                    </p>\n' +
        '                    <p><b>Life is a journey</b></p>\n' +
        '\n' +
        '                    <p>Let\'s go Vegan!I am Lixiang Zhang and I have been a vegetarian since I was 12——even\n' +
        '                        before junior school age. I can still remember the words that day which shocked mr and influenced me\n' +
        '                        lifelong:When you stare at the innocent eyes of a small sheep while eating her mom\'s corpse, is their any difference between\n' +
        '                        you and devil？</p>',
    img:''
});

export default (state= defaultState,action) =>{
    switch(action.type){
        case constant.CHANGE_BLOGDTEAIL:
         return state.merge({
             title:action.title,
             img:action.img,
             content:action.content,
             hits:action.hits,
             likes:action.likes,
             comments:action.comments

         })
        default:
        return state;
    }

}