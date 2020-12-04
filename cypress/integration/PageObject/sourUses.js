///  <reference types="cypress"/>

class sourUses {
    selectSourcesUses(){
        const suMmary = cy
        .get('[class="level-2"]')
        .contains("Summary")
        suMmary.click({force: true})
        const souRces = cy
        .contains("Sources & Uses")
        souRces.click({force: true})
        souRces.wait(3000)
        const costBasisTable = cy.get('[class="react-table-container nativ-table nativ-card with-totals"]')
        .contains("Cost Basis")
        .scrollIntoView()
        costBasisTable.should('be.visible',true)
        return this;
    }
valuesLoads(){
    const iniTial = cy.get('[class="rt-th"]')
        .get('[role="columnheader"]')
        .contains("Initial")
        .scrollIntoView()
        iniTial.should('be.visible',true)
        const future = cy.get('[class="rt-th"]')
        .get('[role="columnheader"]')
        .contains("Future")
        future.should('be.visible',true)
        const total = cy.get('[class="rt-th"]')
        .get('[role="columnheader"]')
        .contains("Total")
        .scrollIntoView() 
        total.should('be.visible',true)
        return this;
}
validateBalance(){
    const sourAmout = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(2)')
    .invoke('text').then((text1) => { 
    const usesAmout = cy
    .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(2)')
    .invoke('text')
    .should((text2) => {
        expect(text1).to.eq(text2)
    })
})
const sourPSF = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(3)')
    .invoke('text').then((text3) => { 
        const usesPSF = cy
        .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(3)')
        .invoke('text')
        .should((text4) => {
            expect(text3).to.eq(text4)
        })
    })
    const sourPer = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(4)')
    .invoke('text').then((text5) => { 
        const usesPer = cy
        .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(4)')
        .invoke('text')
        .should((text6) => {
            expect(text5).to.eq(text6)
        })
    })
    const futurePSF = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(6)')
    .invoke('text').then((text7) => { 
        const usesFuturePSF = cy
        .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(6)')
        .invoke('text')
        .should((text8) => {
            expect(text7).to.eq(text8)
        })
    })
    const futurePer = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(7)')
    .invoke('text').then((text9) => { 
        const usesFuturePer = cy
        .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(7)')
        .invoke('text')
        .should((text10) => {
            expect(text9).to.eq(text10)
        })
    })
    const totalPSF = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(9)')
    .invoke('text').then((text11) => { 
        const usesTotalPSF = cy
        .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(9)')
        .invoke('text')
        .should((text12) => {
            expect(text11).to.eq(text12)
        })
    })
    const totalPer = cy
    .get(':nth-child(1) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(10)')
    .invoke('text').then((text13) => { 
        const usesTotalPer = cy
        .get(':nth-child(2) > .ReactTable > .rt-table > .rt-tfoot > .rt-tr > :nth-child(10)')
        .invoke('text')
        .should((text14) => {
            expect(text13).to.eq(text14)
        })
    })
    return this;
}

} 
export default sourUses;