

# Add gtag Event Tracking to All Interactive Elements

## Files to Change

### 1. `src/components/ui/FloatingWhatsApp.tsx`
Add an `onClick` handler to the `<a>` tag that fires a `whatsapp_click` event with the current page path:
```js
onClick={() => {
  window.gtag?.('event', 'whatsapp_click', {
    location: window.location.pathname
  });
}}
```

### 2. `src/components/ui/GoogleCalendarButton.tsx`
Inside `handleAppointmentClick`, before `window.open(...)`, add:
```js
window.gtag?.('event', 'demana_cita_click', {
  location: window.location.pathname,
  subject: subject
});
```
This covers every "Demana Cita" button site-wide (Hero, OpticalServices, ServiceLayout, etc.) since they all use this component.

### 3. `src/components/home/OpticalServices.tsx`
Wrap the card `<div>` with an `onClick` that fires before navigation:
```js
onClick={() => {
  window.gtag?.('event', 'service_card_click', {
    location: 'optical_services',
    service_name: service.title
  });
}}
```

### 4. `src/components/home/Audiology.tsx`
Same pattern on audiology cards:
```js
onClick={() => {
  window.gtag?.('event', 'service_card_click', {
    location: 'audiology_services',
    service_name: service.title
  });
}}
```

Also add tracking to the "Schedule Consultation" `<Link>` button at the bottom:
```js
onClick={() => {
  window.gtag?.('event', 'demana_cita_click', {
    location: 'audiology_section',
    subject: 'audiologia-centro'
  });
}}
```

## Events Summary

| Event | Fired On | Key Parameters |
|---|---|---|
| `whatsapp_click` | Floating WhatsApp button | `location` (page path) |
| `demana_cita_click` | All GoogleCalendarButton instances + Audiology CTA | `location`, `subject` |
| `service_card_click` | Optical & Audiology service cards | `location`, `service_name` |

All calls use `window.gtag?.()` (optional chaining) so they're safe if analytics hasn't loaded or the user hasn't consented.

