
from django.shortcuts import render


def home(request):
        reasons = [
        "Your smile makes my day brighter. ❤️",
        "You make me feel special. 🥹",
        "I love the way you care for me. 💗",
        "You make ordinary moments memorable.",
        "Your happiness matters to me.",
        "I can be myself with you.",
        "You always make me smile.",
        "Every memory with you is precious.",
        "You are my favourite person. 🫶",
        "Simply because you are YOU. 💖",
    ]
        memories = [
        {
            "title": "Our First Meeting",
            "date": "The day our story began",
            "description": "A beautiful beginning of our story. 💕",
        },
        {
            "title": "Our Special Moment",
            "date": "A memory to cherish",
            "description": "One of those moments I never want to forget.",
        },
        {
            "title": "Our Anniversary",
            "date": "Today and always",
            "description": "I am so happy to share this journey with you. ❤️",
        },
    ]
    
        context = {
        "reasons": reasons,
        "memories": memories,
    }
        return render(request, "memories/home.html",context)