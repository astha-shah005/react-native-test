export function pushView(
    navigation: any,
    screenName: string,
    props: object = {},
  ) {
    navigation.navigate(screenName, props);
}

  //NOTE:Validation Methods
export const handleValidEmail = (val: string, setEmailValidError: Function, setShowEmailError: Function) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      setEmailValidError('Please Enter valid email address');
      setShowEmailError(true);
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };