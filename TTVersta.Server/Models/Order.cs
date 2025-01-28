using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TTVersta.Server.Models
{
    [Table("orders")]
    public class Order
    {
        [Key]
        [Column("id")]
        public int? Id { get; set; }

        [Column("order_number")]
        public string? OrderNumber { get; set; }

        [Required]
        [Column("sender_city")]
        public required string SenderCity { get; set; }

        [Required]
        [Column("sender_address")]
        public required string SenderAddress { get; set; }

        [Required]
        [Column("recipient_city")]
        public required string RecipientCity { get; set; }

        [Required]
        [Column("recipient_address")]
        public required string RecipientAddress { get; set; }

        [Required]
        [Column("weight")]
        public decimal Weight { get; set; }

        [Required]
        [Column("pickup_date", TypeName = "date")]
        public DateTime PickupDate { get; set; }
    }
}
