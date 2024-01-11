package codesyncgroup.ticketsystem.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "status")
public class StatusEntity {

    @Id
    @Column(name = "id_unit", unique = true, nullable = false)
    private Long idUnit;
    private String status;

}
