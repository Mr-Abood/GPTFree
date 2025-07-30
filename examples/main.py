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
