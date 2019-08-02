/*
 * formulas.js - calculator formulas
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */

import numeral from 'numeral'
export default {
  computed: {
    totalJobs () {
      return (this.is_new ? this.n(this.constructionJobs) : 0) +
        this.n(this.renovationJobs) +
        this.n(this.operationJobs) +
        this.n(this.spendingJobs)
    },
    totalImpact () {
      return (this.is_new ? this.n(this.constructionContribution) : 0) +
        this.n(this.renovationImpact) +
        this.n(this.operationContribution) +
        this.n(this.spendingContribution)
    },
    totalImpactTax () {
      return this.n(this.operationExpenditures) +
        this.n(this.spendingResident)
    },
    renovationImpact () {
      return this.homes *
        this.renovationImpacts[this.ckey].Economic_Contribution /
        this.renovationImpacts[this.ckey].Total_Number_of_Apartments
    },
    renovationJobs () {
      return this.homes *
        this.renovationImpacts[this.ckey].Total_Jobs /
        this.renovationImpacts[this.ckey].Total_Number_of_Apartments
    },
    constructionJobs () {
      return this.homes *
        this.constructionImpacts[this.ckey].Total_Employment /
        this.constructionImpacts[this.ckey].Building_Permits
    },
    operationJobs () {
      return this.homes *
        this.operationImpacts[this.ckey].Total_Jobs /
        this.operationImpacts[this.ckey].Total_Number_of_Apartments
    },
    spendingJobs () {
      return this.homes *
        this.spendingImpacts[this.ckey].Total_Jobs_Supported /
        this.spendingImpacts[this.ckey].Total_Number_of_Renter_Households
    },
    operationDollarsSpent () {
      return this.homes *
        this.operationImpacts[this.ckey].Total_Annual_Operation_Cost /
        this.operationImpacts[this.ckey].Total_Number_of_Apartments
    },
    operationExpenditures () {
      return this.homes *
        this.operationImpacts[this.ckey].Tax_Economic_Impact /
        this.operationImpacts[this.ckey].Total_Number_of_Apartments
    },
    constructionDirectOnSiteJobs () {
      return this.homes *
        this.constructionImpacts[this.ckey].Direct_Jobs /
        this.constructionImpacts[this.ckey].Building_Permits
    },
    operationDirectOnSiteJobs () {
      return this.homes *
        this.operationImpacts[this.ckey].Direct_On_Site_Jobs /
        this.operationImpacts[this.ckey].Total_Number_of_Apartments
    },
    operationContribution () {
      return this.homes *
        this.operationImpacts[this.ckey].Economic_Contribution /
        this.operationImpacts[this.ckey].Total_Number_of_Apartments
    },
    constructionContribution () {
      return this.homes *
        this.constructionImpacts[this.ckey].Economic_Contribution /
        this.constructionImpacts[this.ckey].Building_Permits
    },
    spendingResident () {
      return this.homes *
        this.spendingImpacts[this.ckey].Tax_Economic_Impact /
        this.spendingImpacts[this.ckey].Total_Number_of_Renter_Households
    },
    spendingDollars () {
      return this.homes *
        this.spendingImpacts[this.ckey].Direct_Consumer_Spending /
        this.spendingImpacts[this.ckey].Total_Number_of_Renter_Households
    },
    spendingDirectJobs () {
      return this.homes *
        this.spendingImpacts[this.ckey].Direct_Jobs_Supported /
        this.spendingImpacts[this.ckey].Total_Number_of_Renter_Households
    },
    spendingContribution () {
      return this.homes *
        this.spendingImpacts[this.ckey].Total_Consumer_Spending /
        this.spendingImpacts[this.ckey].Total_Number_of_Renter_Households
    },
  },
  methods: {
    n (val) {
      return numeral(val).format('0,0').replace(/,/g, '')*1
    }
  },
}
