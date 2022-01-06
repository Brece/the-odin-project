import { caesarCipher } from "./caesarCipher";

test('Returns back a string with shifted characters by a number.', () => {
    expect(caesarCipher('ake a type specimen,+ book. It has survived not only five centuries, bukkö.ut also the v56vsdleap7 into electronic typesetting, remaining essen22tially ??unchang#+ed. It was popularised', 9))
        .toBe('jtn j chyn bynlrvnw,+ kxxt. Rc qjb bdaerenm wxc xwuh oren lnwcdarnb, kdttö.dc jubx cqn e56ebmunjy7 rwcx nunlcaxwrl chynbnccrwp, anvjrwrwp nbbnw22crjuuh ??dwlqjwp#+nm. Rc fjb yxydujarbnm');

    expect(caesarCipher('AbggTI. vvfe,ggeTE/5 g f+', 5)).toBe('FgllYN. aakj,lljYJ/5 l k+');
});
