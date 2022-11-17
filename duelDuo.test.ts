
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
}),

// test("Add to duo"), () => {
//     let addTo =driver.findElement(By.id('player-duo'))
//     let display = addTo.isDisplayed()
//     expect(addTo).toBe(display)

// }

test('clicking the "Draw" button displays the div with id of choice', async() => { 
    await driver.findElement(By.id('draw')).click()
    const choicesSection = await driver.findElement(By.id('choices'))

    const displayed = await choicesSection.isDisplayed()
    expect(displayed).toBe(true)
   
})
test('clicking the "add to duo" button displays the div with id of choice', async() => { 
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(100)
    await driver.findElement(By.css('-bot-btn')).click()
    const playerDuoSection = await driver.findElement(By.id('player-duo'))

    const displayed = await playerDuoSection.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
   
})
// test('when bot is removed from duo section, it will just go back to choices section', async() => { 
  
//     await driver.findElement(By.id('draw')).click()
//     await driver.sleep(100)
//     await driver.findElement(By.css('-bot-btn')).click()
//     const playerDuoSection = await driver.findElement(By.id('player-duo'))

//     const selectedRobotName = await driver.findElement(By.xpath('//div[@id="player-duo"]/div/h3')).getText()
//     await driver.findElement
   
// })
