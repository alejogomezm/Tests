import { Selector } from 'testcafe';

const signButton = Selector('.login')
const email = Selector('#email')
const password = Selector('#passwd')
const login = Selector("#SubmitLogin")


fixture `Sign in Test`
    .page `http://automationpractice.com/index.php`

test('New test 1', async t => {
    await t
        .click(signButton)
        .takeScreenshot()
        .typeText(email,"testcafeClass@test.com")
        .typeText(password,"Test@1234")
        .click(login)
        .takeScreenshot()
});