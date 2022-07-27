/**
 * 要素の高さを固定し、getItemLayoutで各要素の高さとオフセットを返却できるようにしています。
 * そうしないと、各要素をレンダリングしないと高さを計算できず、数百件程度のリストでもスクロール中に引っかかりが発生してしまいます。
 *
 * @see getItemLayout
 * @see styles.listItemTouchable
 */
export const ACKNOWLEDGEMENT_ITEM_HEIGHT = 70;
