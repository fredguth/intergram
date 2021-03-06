import { h, render } from 'preact';
import Chat from './chat';
import * as store from 'store'

render(
    <Chat chatId={getUrlParameter('id')} host={getUrlParameter('host')} userId={getUserId()} />,
    document.getElementById('intergramChat')
);

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function getUserId () {
    if (store.enabled) {
        return store.get('userId') || store.set('userId', generateRandomId());
    } else {
        return generateRandomId();
    }
}

function generateRandomId() {
    return Math.random().toString(36).substr(2, 6);
}