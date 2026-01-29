import { test, expect} from '@playwright/test';

test('Estys hompage has title and logo', async ( { page} ) => {
    await page.goto('https://www.etsy.com.');
    
    await expect(page).toHaveTitle(/Etsy/)
})

