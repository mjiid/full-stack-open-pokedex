import { test, expect } from '@playwright/test'

test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
})

test('can visit a pokemon page', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
})