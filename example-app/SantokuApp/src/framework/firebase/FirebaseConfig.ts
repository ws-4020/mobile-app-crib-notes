import firebase from '@react-native-firebase/app';

const dummyProjectId = 'santoku-app-dummy';

/**
 * Firebaseインスタンスの情報を取得するクラスです。
 */
class FirebaseConfig {
  private name: string | undefined;

  /**
   * コンストラクタ
   * @param name Firebaseインスタンスの名前
   */
  constructor(name?: string) {
    this.name = name;
  }
  /**
   * FirebaseインスタンスのOption情報です。
   * 接続するFirebaseの情報などが入っています。
   * @returns Firebaseインスタンスに設定されているOption情報
   */
  get options() {
    return firebase.app(this.name).options;
  }
  /**
   * Firebaseの接続情報がダミーかどうかを判定します。
   * Firebaseに接続するための設定ファイル（Android: google-services.json、iOS: GoogleService-Info.plist）に定義されているプロジェクトIDを使用して判定します。
   * @returns Firebaseの設定ファイルがダミーの場合はtrue、それ以外の場合はfalseを返却します。
   */
  get isDummy() {
    return this.options.projectId === dummyProjectId;
  }
}

export const firebaseConfig = new FirebaseConfig();
