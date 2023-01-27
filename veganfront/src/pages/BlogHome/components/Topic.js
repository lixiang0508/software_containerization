import React,{PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../styled';

//专题组件 blog的tag
export default class Topic extends PureComponent {

    render(){
        return (
            <TopicWrapper>
                <TopicItem >&nbsp;Vegan nutrition&nbsp;</TopicItem>
                <TopicItem >&nbsp;Vegan recipe&nbsp;</TopicItem>
                <TopicItem >&nbsp;Vegan for over 20yrs&nbsp;</TopicItem>
                <TopicItem >&nbsp;Global vegans&nbsp;</TopicItem>
                <TopicItem >&nbsp;Animal liberation&nbsp;</TopicItem>
                <TopicItem >&nbsp;Reading and thinking&nbsp;</TopicItem>
                <TopicItem >&nbsp;The activists&nbsp;</TopicItem>

            </TopicWrapper>
        )
    }
}