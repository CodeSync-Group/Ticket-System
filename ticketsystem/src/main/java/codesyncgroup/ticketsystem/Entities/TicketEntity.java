package codesyncgroup.ticketsystem.Entities;

import java.util.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ticket")
public class TicketEntity {

    @Id
    @Column(name = "id_ticket", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTicket;
    private String subject;
    private String descriptionTicket;
    private String annotation;
    private Date creationDate;
    private Date lastUpdate;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserEntity creator;

    @ManyToOne
    @JoinColumn(name = "id_headship")
    private UserEntity headship;

    @ManyToOne
    @JoinColumn(name = "id_analyst")
    private UserEntity ananlyst;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private CategoryEntity category;

    @ManyToOne
    @JoinColumn(name = "id_status")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "id_unit")
    private UnitEntity unit;

}
