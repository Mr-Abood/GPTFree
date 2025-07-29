# Algion - Free OpenAI API

🚀 Access powerful AI models through our OpenAI-compatible API. Completely free and ready to use.

## Overview

Algion provides a free alternative to OpenAI's API, offering access to advanced AI models without any cost. Our API is fully compatible with OpenAI's client libraries, making it easy to integrate into your existing projects.

## Quick Start

### API Configuration
- **Base URL:** `https://api.algion.dev/v1`
- **API Key:** `123123`

### Installation

```bash
pip install openai
```

### Basic Usage

```python
import openai

client = openai.OpenAI(
    api_key="123123",
    base_url="https://api.algion.dev/v1"
)

response = client.chat.completions.create(
    model="gpt-4.1",
    messages=[
        {"role": "user", "content": "Hello! How are you?"}
    ]
)

print(response.choices[0].message.content)
```

### JavaScript/Node.js Example

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: '123123',
  baseURL: 'https://api.algion.dev/v1',
});

const response = await client.chat.completions.create({
  model: 'gpt-4.1',
  messages: [{ role: 'user', content: 'Hello! How are you?' }],
});

console.log(response.choices[0].message.content);
```

### cURL Example

```bash
curl -X POST "https://api.algion.dev/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 123123" \
  -d '{
    "model": "gpt-4.1",
    "messages": [{"role": "user", "content": "Hello! How are you?"}]
  }'
```

## Available Models

- `gpt-4.1`
- `gpt-4o`
- More models coming soon!

## Features

- ✅ **100% Free** - No hidden costs or rate limits
- ✅ **OpenAI Compatible** - Drop-in replacement for OpenAI API
- ✅ **No Registration** - Start using immediately
- ✅ **Active Development** - Regular updates and new models

## API Endpoints

All endpoints follow OpenAI's API specification:

- `POST /v1/chat/completions` - Chat completions
- `POST /v1/models` - List available models
- More endpoints coming soon!

## Rate Limits

Currently, there are no strict rate limits, but we ask users to be reasonable with their usage to ensure the service remains available for everyone.

## Status & Updates

This project is currently in **Beta**. Join our [Telegram channel](https://t.me/algion) to stay updated on:

- New model releases
- Feature announcements  
- Service updates
- Community discussions

## Contributing

We welcome contributions! Whether it's bug reports, feature requests, or code contributions, feel free to get involved.

## Support

- **Website:** [algion.dev](https://algion.dev)
- **Telegram:** [@algion](https://t.me/algion)
- **Issues:** Create an issue in this repository

## Disclaimer

This service is provided as-is. While we strive for high availability, please consider this when building production applications.

---

**⭐ Star this repo if you find it useful!**

Made with ❤️ for the developer community

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=H4xC0d3/FreeGPT&type=Date)](https://star-history.com/#H4xC0d3/FreeGPT&Date)
