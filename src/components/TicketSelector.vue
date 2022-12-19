<script setup>
const props = defineProps({
  prices: {
    type: Object,
    required: true
  },
  status: {
    type: Boolean
  }
})
</script>
<template>
  <div class="ticket-selector page-event__ticket-selector">
    <h2>Billetter</h2>
    <div class="ticket-selector__summary">
      <div class="ticket-selector__text">
        Ticket: {{prices.value}} {{ prices.currency }}
      </div>
      <div class="ticket-selector__fees">
        incl. VAT and ticket fees
      </div>
      <div class="ticket-selector__fees">
        The tickets are immediately available once the payment data has been sent for downloading and will also be sent to you by e-mail.
      </div>
      <button class="btn--primary btn-submit btn--large btn--block">Add to shopping cart</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ticket-selector {
    background-color: var(--light);
    padding: 8px 12px;
    &__price {
    min-height: 48px;
    display: flex;
    margin-right: 0;
    margin-left: 0;
    align-items: center;
  }
  &__summary {
    flex: 0 0 50%;
    max-width: 50%;
    margin-left: 50%;
    margin-top: 18px;
  }
  &__text{
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 8px;
  }
  &__fees {
    font-size: 13px;
    line-height: 15px;
    margin-top: 6px;
    color: var(--soft);
  }
}
</style>