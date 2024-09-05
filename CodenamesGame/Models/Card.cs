namespace CodenamesGame.Models;

public class CardInformation
{
    public string Name { get; set; } = string.Empty;
    public CardType Type { get; set; }
}

public enum CardType 
{
    Red, 
    Blue, 
    Neutral,
    Assassin 
}