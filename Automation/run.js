const { chromium } = require('playwright');

const utils = require('./utils');

async function run() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the login page
    // await page.goto('https://redev.netlotto.com.au/');
    await page.goto('https://redev.netlotto.com.au/');
    // await page.goto('https://redev.netlotto.com.au/ContactUs/');
    // MOJ DEO KODA
    // DEBUG DEO STEVANOV
    // const threeButtons = await page.$$('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-145nw7j"]');
    // await threeButtons[1].click();
    // DEBUG DEO STEVANOV
    // await page.click('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1ncjhp8"]');
    // await page.click('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-145nw7j"]');

    // klikcem Online Support
    // await page.click('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge vServiceButton css-5vlwvx"]');

    // await page.click('h3[class="MuiTypography-root MuiTypography-body1 css-1mmlhq4"]');

    // biranje drugog elementa kad imamo vise istih (ovde smo izabrali drugi element niza)
    // let varijabla = await page.$$('h3[class="MuiTypography-root MuiTypography-body1 css-1mmlhq4"]');
    // varijabla[1].click();

    // // prvi parameter ovo sto trazimo ONDA IDE ZAPETA pa pod navodnicima ono sto upusujemo
    // // popunjavam polje First Name
    // await page.fill('input[id=firstName]', 'Ilija');
    // // POPUNJAVAM POLJE LAST NAME
    // await page.fill('input[id=lastName]', 'Terzic');
    // // POPUNJAVAM POLJE EMAIL ADDRESS
    // await page.fill('input[id=email]', 'poz@cao.com');
    // // POPUNJVAMA POLJE SUBJECT
    // await page.fill('input[id=subject]', 'Tema');
    // // POPUNJAVAM POLJE DETAILS
    // await page.fill('textarea[id=details]', 'Cao ja sam Ilija i bas sam seksi');
    // // KLIKCEM NA PADAJUCI MENI CATEGORY
    // await page.click('div[id=category]');
    // // BIRAM RANDOM OPCIJU IZ PADAJUCEG MENIJE CATEGORY
    // let categoryList = await page.$$('li[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-vm2tii"]');
    // await categoryList[0].click();
    // // await page.click('div [class="recaptcha-checkbox-spinner"]');
    // // KLIKCEM NA SEND INFORMATION
    // await page.click('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium contact-us-page-form-submit-btn css-1gnm5ns"]');


    // let categoryOptions = await page.$$('li[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-vm2tii"]');
    // console.log(categoryOptions);
    // KRAJ MOG DELA KODA

    // let dugmad = await page.$$('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-145nw7j"]');
    // dugmad[0].click();

    /**results
        select oz lotto
        select last month
        submit
        ispisati reyultate is prve kucice
        await page.textContent
    let navBarOptions = await page.$$('a[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone HeaderNavLink_HeaderNavLink__LN0pO header-link css-wuco9u"]');
    navBarOptions[2].click();

    // await page.click('div[class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-1826qvi"]');
    await page.click('div[id=game-select]');
    let gamesOptions = await page.$$('li[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-vm2tii"]');
    gamesOptions[1].click();

    await page.click('div[id=month-select]');
    let monthOptions = await page.$$('li[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-vm2tii"]');
    monthOptions[0].click();

    await page.click('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium lotto-page-submit css-1gnm5ns"]');
    // await utils.wait(2000);
    // ispisivanje svih loptica
    // let loptice = await page.$$('p[class="MuiTypography-root MuiTypography-body1 css-kfphol"]');
    // loptice.forEach(async (e, i) => {
    //     console.log(`Loptica indeksa ${i}: ` + await e.textContent());
    // });

    // ispisivanje prvih 9
    async function ispisi() {
        console.log("PRVI REZULTAT");
    }
    await utils.wait(3000);
    await ispisi();
    loptice.forEach(async (e, i) => {
        if (i < 9)
            console.log(`Loptica indeksa ${i}: ` + await e.textContent());
        else
            return;
    });
    */

    

    // ovde cekam 4 sekunde jer ne znam kakav je net
    await utils.wait(4000);
    // await browser.close();

}

run();
/**ZADACI ZA AUTOMATIZACIJU DODATNI
 * 1. Idi na More Games ->
 * 2. Izabri Monday
 * 3. Izaberi neki datum u Choose starting draw
 * 4. Izaberi 15 igara
 * 5. Beginner: Izaberi "All" kod Quickpick-a / Intermediate: Neka unos za svaku bude: 15, 12, 37, 5, 40, 45
 * 6. Klikni na Add to Cart
 * 7. Cekiraj Consecutive draws Consecutive draws
 * 8. Izaberi 5 consecutive draw-a
 * 9. Klikni na Go To Checkout
 * 10. Ubaci e-mail i siffru
 * 11. Klikni login
 */