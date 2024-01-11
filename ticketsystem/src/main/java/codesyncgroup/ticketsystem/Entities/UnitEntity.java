package codesyncgroup.ticketsystem.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "unit")
public class UnitEntity {
    @Id
    @Column(name = "id_unit", unique = true, nullable = false)
    Long idUnit;
    String nameUnit;
    String descriptionUnit;
}
