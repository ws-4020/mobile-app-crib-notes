import {bundledMessages} from '../constants/BundledMessages';

export type BundledMessagesType = typeof bundledMessages;
export type MessageKey = keyof typeof bundledMessages;
